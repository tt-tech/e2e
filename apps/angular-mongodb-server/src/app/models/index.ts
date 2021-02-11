import {uri} from '../config/db.config';
import {Tutorial} from './tutorial.model';
import {User} from './user.model';
import {Role} from './role.model';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db: any = {};
db.mongoose = mongoose;
db.url = uri();
db.tutorials = Tutorial;
db.user = User;
db.role = Role;

export const ROLES = ['user', 'admin', 'moderator'];
db.ROLES = ROLES;

export default db;
