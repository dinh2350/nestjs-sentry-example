import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Body, Controller, Post, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  getTasks() {
    console.log('getTasks');
    return this.tasksService.getTasks();
  }
}
