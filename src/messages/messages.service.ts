import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  messages = [];
  clientToUser = {};
  create(createMessageDto: CreateMessageDto, id: string) {
    const message = {
      text: createMessageDto.text,
      name: this.getClientName(id),
    };
    this.messages.push(message);
    return message;
  }

  findAll() {
    return this.messages;
  }

  identify(name: string, id: string) {
    this.clientToUser[id] = name;
    return Object.values(this.clientToUser);
  }

  getClientName(id: string) {
    return this.clientToUser[id];
  }
}
