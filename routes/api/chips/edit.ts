import { type Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    await console.log(ctx.route, await req.json());
    return new Response(JSON.stringify({ from: ctx.route, ok: true }));
  },
};
