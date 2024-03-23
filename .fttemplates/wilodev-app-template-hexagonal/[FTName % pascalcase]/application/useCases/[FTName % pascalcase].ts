/**
 * @fileOverview <FTName| pascalcase > Use Case
 * @description Handles the process of requesting a password reset. It validates
 *              the user's email and sends a password reset link if the email is valid.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [https://cintanegra.net/license](https://raw.githubusercontent.com/wilodev/cintanegra.net/master/LICENSE)
 */

import { <FTName| pascalcase > } from '../domain/entities/<FTName| pascalcase >';

export class <FTName| pascalcase > {
  private <FTName|camelcase>Service: <FTName| pascalcase >Service;

  constructor(<FTName|camelcase>Service: <FTName| pascalcase >Service) {
    this.<FTName|camelcase>Service = <FTName|camelcase>Service;
  }

  async execute(prop: string): Promise<void> {
    const <FTName|camelcase> = new <FTName| pascalcase >(prop);
    await this.<FTName|camelcase>Service.execute(
      <FTName|camelcase>
    );
  }
}
