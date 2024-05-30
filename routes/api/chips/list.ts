import { type Handlers } from "$fresh/server.ts";
import { dbChip2, modChip } from "@/db.ts";

export interface ReqListChips {
  /**
   * String that will be used to filter chip names by regex match. Leave undefiend for no filter.
   */
  regex?: string;
  /**
   * Number of chip entries to respond. Leave undefined for requesting all.
   */
  quantity?: number;
}

export interface ResListChips {
  chips: Deno.KvEntry<modChip>[];
  from: string;
  ok: boolean;
}

export const handler: Handlers = {
  async POST(_req, ctx) {
    return new Response(
      JSON.stringify({
        from: ctx.route,
        ok: true,
        chips: await dbChip2.list(),
      }),
    );
  },
};
