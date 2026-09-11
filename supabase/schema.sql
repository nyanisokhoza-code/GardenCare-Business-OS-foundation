-- GardenCare Business OS initial production schema.
-- Run through Supabase migrations/SQL editor after reviewing policies.

create extension if not exists "pgcrypto";

create table if not exists public.business_settings (
  id uuid primary key default gen_random_uuid(),
  business_name text not null default 'GardenCare',
  currency text not null default 'ZAR',
  material_markup_pct numeric(8,2) not null default 30,
  target_margin_pct numeric(8,2) not null default 35,
  vehicle_rate_per_km numeric(10,2) not null default 5,
  minimum_job_charge numeric(12,2) not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  unit text not null default 'bag',
  unit_cost numeric(12,2) not null,
  coverage_m2_per_unit numeric(12,3),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  address text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.garden_assessments (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.customers(id) on delete set null,
  status text not null default 'draft',
  total_area_m2 numeric(12,2),
  confidence_pct numeric(5,2),
  confirmed_area_m2 numeric(12,2),
  notes text,
  created_at timestamptz not null default now(),
  confirmed_at timestamptz
);

create table if not exists public.measurement_evidence (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.garden_assessments(id) on delete cascade,
  method text not null,
  area_m2 numeric(12,2),
  confidence_pct numeric(5,2),
  media_path text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.customers(id) on delete set null,
  assessment_id uuid references public.garden_assessments(id) on delete set null,
  status text not null default 'draft',
  minimum_price numeric(12,2),
  recommended_price numeric(12,2),
  premium_price numeric(12,2),
  accepted_price numeric(12,2),
  created_at timestamptz not null default now()
);

create table if not exists public.audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  old_value jsonb,
  new_value jsonb,
  created_at timestamptz not null default now()
);

-- Enable RLS before exposing these tables through the browser.
alter table public.business_settings enable row level security;
alter table public.products enable row level security;
alter table public.customers enable row level security;
alter table public.garden_assessments enable row level security;
alter table public.measurement_evidence enable row level security;
alter table public.quotes enable row level security;
alter table public.audit_log enable row level security;

-- Production policies will be added after the auth/role model is created.
-- Do not ship an "allow all" policy.


-- Auth profile/role foundation
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'employee' check (role in ('developer_admin','owner','manager','recruiter','employee')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name) values (new.id, coalesce(new.raw_user_meta_data->>'full_name',''));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

create policy "users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "users can update own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
