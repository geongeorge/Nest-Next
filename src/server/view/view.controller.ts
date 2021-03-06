import { Controller, Get, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
const { parse } = require('url');
import { ViewService } from './view.service';

@Controller('/')
export class ViewController {
  constructor(private viewService: ViewService) {}

  @Get('')
  public async showHome(@Req() req: Request, @Res() res: Response) {
    this._fireUpNext(req, res);
  }

  @Get('_next*')
  public async assets(@Req() req: Request, @Res() res: Response) {
    this._fireUpNext(req, res);
  }

  private async _fireUpNext(req, res) {
    const parsedUrl = parse(req.url, true);
    await this.viewService
      .getNextServer()
      .render(req, res, parsedUrl.pathname, parsedUrl.query);
  }
}
