import { Container } from "inversify";
import { Application } from "./app";
import { Server } from "./server";
import Types from "./types";
import { TokenController } from "./controllers/token.controller";
import { TokenService } from "./services/token.service";

const container: Container = new Container();

container.bind(Types.Server).to(Server);
container.bind(Types.Application).to(Application);

container.bind(Types.TokenController).to(TokenController);
container.bind(Types.TokenService).to(TokenService);

export { container };
