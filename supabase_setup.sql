create table if not exists public.stock_items (
  id bigint generated always as identity primary key,
  sku text not null unique,
  type text not null,
  category text not null,
  name text not null,
  stock integer not null default 0 check (stock >= 0),
  enabled boolean not null default true
);

alter table public.stock_items enable row level security;

create policy "public read stock"
on public.stock_items for select
to anon, authenticated
using (true);

create policy "authenticated insert stock"
on public.stock_items for insert
to authenticated
with check (true);

create policy "authenticated update stock"
on public.stock_items for update
to authenticated
using (true)
with check (true);
