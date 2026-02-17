// backend/models/Appointment.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Appointment = sequelize.define(
  "Appointment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    serviceType: {
      type: DataTypes.ENUM("TDAH", "Hypnose", "Consultation gratuite"),
      allowNull: false,
    },
    appointmentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    appointmentTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
      comment: "Durée en minutes",
    },
    status: {
      type: DataTypes.ENUM("pending", "confirmed", "completed", "cancelled"),
      defaultValue: "pending",
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Notes du patient",
    },
    adminNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Notes du praticien",
    },
  },
  {
    tableName: "appointments",
    timestamps: true,
  },
);

module.exports = Appointment;
