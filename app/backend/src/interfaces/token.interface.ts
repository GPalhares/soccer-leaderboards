import { JwtPayload } from 'jsonwebtoken';

interface MyJwtPayload extends JwtPayload {
  email: string;
}
export default MyJwtPayload;
