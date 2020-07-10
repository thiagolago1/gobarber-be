interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      // put a real email
      email: 'equipe@gobarber.com.br',
      name: 'Equipe GoBarber',
    },
  },
} as IMailConfig;
