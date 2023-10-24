import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { validateEmail } from "../helpers/EmailHelper";
import { UserService } from "../services/UserService";

export class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  create = (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name not found" });
    }

    if (name.trim().length < 4) {
      return res
        .status(400)
        .json({ message: "Name must have at least 4 characters" });
    }

    if (!email) {
      return res.status(400).json({ message: "Email not found" });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const emailAlreadyExists = this.userService.getAll().map((user) => {
      return user.email === email;
    });

    if (emailAlreadyExists.includes(true)) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = {
      id: uuid(),
      name,
      email,
    };

    res.status(201).json(this.userService.create(user));
  };

  getAll = (req: Request, res: Response) => {
    res.status(200).json(this.userService.getAll());
  };

  getById = (req: Request, res: Response) => {
    const { userId } = req.params;
    const user = this.userService.getById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  };

  update = (req: Request, res: Response) => {
    const { userId } = req.params;
    const { name, email } = req.body;
    res.status(200).json(this.userService.update(userId, { name, email }));
  };

  delete = (req: Request, res: Response) => {
    const { userId } = req.params;
    res.status(200).json(this.userService.delete(userId));
  };
}
