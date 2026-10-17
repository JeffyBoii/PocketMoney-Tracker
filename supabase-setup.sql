-- Run this once in Supabase: SQL Editor > New query > paste > Run
create table if not exists public.pocketmoney (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.pocketmoney enable row level security;

create policy "own row select" on public.pocketmoney for select using (auth.uid() = user_id);
create policy "own row insert" on public.pocketmoney for insert with check (auth.uid() = user_id);
create policy "own row update" on public.pocketmoney for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own row delete" on public.pocketmoney for delete using (auth.uid() = user_id);

-- live updates between devices
alter publication supabase_realtime add table public.pocketmoney;
