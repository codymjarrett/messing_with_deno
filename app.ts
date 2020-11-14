import { Application } from "https://deno.land/x/oak@v6.0.0/mod.ts";
import logger from "https://deno.land/x/oak_logger/mod.ts";
import {
  viewEngine,
  engineFactory,
  adapterFactory,
} from "https://deno.land/x/view_engine@v1.3.0/mod.ts";

const oakAdapter = adapterFactory.getOakAdapter()
const handlebarsEngine = engineFactory.getHandlebarsEngine();

const app = new Application()

app.use(
  viewEngine(oakAdapter, handlebarsEngine, {
    viewRoot: "./view",
    viewExt: ".handlebars",
  })
);
// app.use(logger.logger)
// app.use(logger.responseTime)

app.use((ctx, next) => {
  ctx.render('index', { data: {name: "cody"}})
})
console.log(`🌳 oak server running at http://localhost:3333/ 🌳`)

await app.listen({port: 3333});
