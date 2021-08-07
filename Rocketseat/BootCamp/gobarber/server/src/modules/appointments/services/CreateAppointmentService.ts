import { startOfHour } from 'date-fns';

import Appointment from '../infra/typeorm/entities/Appointments';
import AppointmentRepository from '../infra/typeorm/repositories/AppointmentRepository';
import AppError from '@shared/errors/AppErrors';
import IAppointmentRepository from '../repositories/IAppointmentRepository';

/**
 * - Recimento de informações
 * - Tratativa de error/exceções
 * - Acesso ao repositório
 */

interface IRequestDTO {
  provider_id: string;
  date: Date;
}

/**
 * Dependecy Inversion
 */

class CreateAppointmentService {
  
  constructor(private repository: IAppointmentRepository){}

  public async execute({
    provider_id,
    date,
  }: IRequestDTO): Promise<Appointment> {

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.repository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appoointment is alredy booked', 400);
    }

    const newAppointment = await this.repository.create({
      provider_id,
      date: appointmentDate,
    });

    return newAppointment;
  }
}

export default CreateAppointmentService;
