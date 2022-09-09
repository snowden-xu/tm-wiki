import { ApiProperty } from '@nestjs/swagger';

export class AddWordEntryDto {
  @ApiProperty({
    description: '姓名',
    example: '坑跌王',
    required: true,
  })
  readonly name: string;

  @ApiProperty({
    description: '年龄',
    example: 18,
    required: true,
  })
  readonly age: number;

  @ApiProperty({
    description: '爱好',
    example: '炒股',
    required: false,
  })
  readonly hobby: string;
}
