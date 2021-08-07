import { getRepository, EntityRepository, Repository } from 'typeorm';

import Appointment from '../entities/Appointments';

import IAppointmentRepository from '../../../repositories/IAppointmentRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

@EntityRepository(Appointment)
class AppointmentRepository implements IAppointmentRepository {

  private ormRepository: Repository<Appointment>;

  constructor(){
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async create({ provider_id, date}: ICreateAppointmentDTO ): Promise<Appointment>{
    const appointment = this.ormRepository.create({provider_id, date});
    
    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default AppointmentRepository;
