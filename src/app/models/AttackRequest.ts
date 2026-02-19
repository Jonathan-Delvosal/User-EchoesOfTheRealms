import { ActorResolved } from './ActorResolved';

export interface AttackRequest {
  attackId: number;
  attacker: ActorResolved;
  defender: ActorResolved;
}