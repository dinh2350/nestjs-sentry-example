import { TasksRepository } from './tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  createTask(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.createTask(createTaskDto);
  }
  getTasks() {
    try {
      return this.tasksRepository.find();
    } catch (error) {}
  }
}
