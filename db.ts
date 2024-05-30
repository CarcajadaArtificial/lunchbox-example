//   ___       _        _
//  |   \ __ _| |_ __ _| |__  __ _ ___ ___
//  | |) / _` |  _/ _` | '_ \/ _` (_-</ -_)
//  |___/\__,_|\__\__,_|_.__/\__,_/__/\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @module
 */
import { ulid } from "https://deno.land/std@0.217.0/ulid/mod.ts";
import { Crud, kvIteratorToArray } from "lunchbox/src/db.ts";

/** Connection to the DenoKv database. */
const kv = await Deno.openKv();

export interface modChip {
  name: string;
}

export const dbChip2 = new Crud<modChip>(kv, ["chips"]);

export const dbChip = {
  add: async (chip: modChip) => {
    const key = ["chips", ulid()];
    const op = kv.atomic().check({ key, versionstamp: null }).set(key, chip);
    const res = await op.commit();
    if (!res.ok) throw new Error("Failed to create chip.");
  },
  get: async (...ids: string[]) =>
    await kv.getMany<modChip[]>(ids.map((id) => ["chips", id])),
  list: async () =>
    await kvIteratorToArray<modChip>(
      await kv.list<modChip>({ prefix: ["chips"] }),
    ),
  edit: async (id: string, chip: modChip) => {
    const key = ["chips", id];
    const op = kv.atomic().set(key, chip);
    const res = await op.commit();
    if (!res.ok) throw new Error("Failed to create chip.");
  },
};
