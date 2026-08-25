-- BEL OSTIA V4 — à exécuter plus tard dans Supabase avec le gérant.
create table if not exists public.stock_items (
  id bigint generated always as identity primary key,
  type text not null,
  category text not null,
  name text not null,
  stock integer not null default 0 check (stock >= 0),
  price numeric(10,2) not null default 0,
  enabled boolean not null default true,
  unique(type, category, name)
);

alter table public.stock_items enable row level security;

-- Lecture publique des disponibilités (aucune donnée privée).
create policy "public can read stock"
on public.stock_items for select
to anon, authenticated
using (true);

-- Seuls les utilisateurs authentifiés peuvent modifier les stocks.
create policy "authenticated admins can insert stock"
on public.stock_items for insert
to authenticated
with check (true);

create policy "authenticated admins can update stock"
on public.stock_items for update
to authenticated
using (true)
with check (true);
