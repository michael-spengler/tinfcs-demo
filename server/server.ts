
import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

const app = opine();

app.get("/apiendpoint1", function (req, res) {
  res.send("Hello World 1");
});

app.get("/apiendpoint2", function (req, res) {
  res.send("Hello World 2");
});

app.get("/getISSPosition", async function (req, res) {

    const result = await Request.get('http://api.open-notify.org/iss-now.json')

    res.send(result);

});


const port = 3001

app.listen(
  port,
  () => console.log(`server has started on http://localhost:${port} 🚀`),
);