import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddWordEntryDto {
  @ApiProperty({
    description: '姓名',
    example: '坑跌王',
    required: true,
  })
  @IsNotEmpty({ message: '姓名不能为空' })
  readonly name: string;

  @ApiProperty({
    description: '年龄',
    example: 18,
    required: true,
  })
  @IsNotEmpty({ message: '年龄不能为空' })
  @IsNumber({}, { message: '年龄必须为数值类型' })
  readonly age: number;

  @ApiProperty({
    description: '爱好',
    example: '炒股',
    required: false,
  })
  readonly hobby: string;
}
