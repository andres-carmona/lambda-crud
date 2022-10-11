import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: "postgres",
  url: "postgres:admin:pass@localhost:5432/test",
  entities: ["dist/**/**/*.entity{.js,.ts}"],
  synchronize: true
}

// const config: TypeOrmModuleOptions = {
//   type: "postgres",
//   url: "postgres:postgres:password@crud-test.ckacmj4wdbrr.us-east-1.rds.amazonaws.com:5432/test",
//   entities: ["dist/**/**/*.entity{.js,.ts}"],
//   synchronize: true
// }

export {
  config
}