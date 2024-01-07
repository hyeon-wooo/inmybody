import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtAuthGuard } from './jwt.guard';
import { RolesGuard } from './role/role.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
    // UserModule,
  ],
  providers: [JwtStrategy, AuthService, JwtAuthGuard, RolesGuard],
  exports: [AuthService, JwtAuthGuard, RolesGuard],
})
export class AuthModule {}
