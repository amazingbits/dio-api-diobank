const db = [
  {
    name: "João Neto da Silva",
    email: "joan.neto@email.com",
    id: "e02efae2-c609-469f-899e-7191216160bc",
  },
  {
    name: "Joana Macedo Silveira",
    email: "joana.m@gmail.com",
    id: "61c83375-c40f-4da8-837f-be36cdc7da45",
  },
];

type UserProps = {
  name: string;
  email: string;
  id: string;
};

export class UserService {
  create = (user: UserProps): UserProps[] => {
    db.push(user);
    return db;
  };

  getAll = (): UserProps[] => {
    return db;
  };

  getById = (userId: string): UserProps | null => {
    return db.find((user) => user.id === userId);
  };

  update = (
    userId: string,
    { name, email }: { name: string; email: string },
  ): UserProps[] => {
    const user = this.getById(userId);
    if (user) {
      const index = db.indexOf(user);
      db[index] = {
        id: userId,
        name,
        email,
      };
    }
    return db;
  };

  delete = (userId: string): UserProps[] => {
    const user = this.getById(userId);
    if (user) {
      const index = db.indexOf(user);
      db.splice(index, 1);
    }
    return db;
  };
}
