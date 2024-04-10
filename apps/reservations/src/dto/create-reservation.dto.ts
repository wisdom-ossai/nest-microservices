import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsString, IsNotEmpty } from 'class-validator';
export class CreateReservationDto {
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  placeId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  invoiceId: string;
}
