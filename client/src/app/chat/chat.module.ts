import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AuthModule } from '../auth/auth.module'

import { MatProgressBarModule, MatTooltipModule } from '@angular/material'

import { WatsonConversation } from './conversation.service'
import { WatsonDiscovery } from './discovery.service'
import { WatsonToneAnalyzer } from './tone-analyzer.service'
import { ChatComponent } from './chat.component'
import { ChatInputComponent } from './chat-input/chat-input.component'
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component'

@NgModule({
  declarations: [
    ChatComponent,
    ChatInputComponent,
    ChatBubbleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    HttpModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  providers: [
    WatsonConversation,
    WatsonDiscovery,
    WatsonToneAnalyzer
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
