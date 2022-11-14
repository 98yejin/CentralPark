import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Command } from "commander";

async function bootstrap() {
  const program = new Command();
  program.command("centralpark");
  program.allowUnknownOption();
  program.option(
    "--port <port>",
    "set port number",
    "3000"
  );
  program.option(
    "--jenkins_home <jenkin_home>",
    "set jenkins home directiory path",
  );
  program.parse(process.argv);
  const options = program.opts();
  const port = options.port;
  const jenkins_home = options.jenkins_home;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
