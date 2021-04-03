import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// создание схемы юезра
// оперделяем все поля юезра
const userSchema = mongoose.Schema(
  {
    // name: String -добовление поля без доп параметров
    name: {
      // добовление поля с доп параметрами
      type: String,
      required: true,
    },
    email: {
      // добовление поля с доп параметрами
      type: String, // тип
      required: true, // опция обезательное поле
      // уникальное значени
       unique: true,
    },
    referralLink: {
      type: String,
      default: "a111",
    },
    friends: {
      firsLine: [{ id: mongoose.Schema.Types.ObjectId }],
      secondLine: [{ id: mongoose.Schema.Types.ObjectId }],
      thirdLine: [{ id: mongoose.Schema.Types.ObjectId }],
    },
    country: {
      // добовление поля с доп параметрами
      type: String, // тип
    },
    password: {
      // добовление поля с доп параметрами
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // временаая метка
  }
);
//Добавляет метод экземпляра к документам, созданным на основе моделей, скомпилированных из этой схемы.
userSchema.methods.matchPassword = async function (plainPassword) {
  // сравниваем текстовый пароль с хеш паролем
  return await bcrypt.compare(plainPassword, this.password);
};
// перед сохраненим в БД запускаем функцию хуеширования пароля
userSchema.pre("save", async function (next) {
  // если поле password не измененно то выходим сразу
  if (!this.isModified("password")) {
    next();
  }
  // хешируем пароль
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// создаем модель юзера
const User = mongoose.model("User", userSchema);

export default User;
