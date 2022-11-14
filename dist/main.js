"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const commander_1 = require("commander");
async function bootstrap() {
    const program = new commander_1.Command();
    program.command("centralpark");
    program.allowUnknownOption();
    program.option("--port <port>", "set port number", "3000");
    program.option("--jenkins_home <jenkin_home>", "set jenkins home directiory path");
    program.parse(process.argv);
    const options = program.opts();
    const port = options.port;
    const jenkins_home = options.jenkins_home;
    console.log("testtest");
    console.log(port);
    console.log(jenkins_home);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map