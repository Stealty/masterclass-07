import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Gabriel', email: 'biellbigama@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Gabriel Ribeiro',
        email: 'biellbigama@gmail.com'
      },
      message: {
        subject: 'Seja bem-vindo',
        body: 'Seja bem-vindo'
      }
    });

    return res.send();
  }
};