import { type Handlers } from "$fresh/server.ts";
import { dbChip2, modChip } from "@/db.ts";

export interface ReqAddChips {
  chip: modChip;
}

export interface ResAddChips {
  from: string;
  ok: boolean;
}

export const handler: Handlers = {
  async POST(req, ctx) {
    const body = (await req.json()) as ReqAddChips;
    dbChip2.add(body.chip);
    return new Response(JSON.stringify({ from: ctx.route, ok: true }));
  },
};
