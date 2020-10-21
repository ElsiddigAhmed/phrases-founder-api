import {
  Length,
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsOptional,
} from 'class-validator';
// Phrases dto interface
export class Phrase {
  @IsNotEmpty()
  @Length(3)
  @IsString()
  phrase: string;
  @IsNotEmpty()
  @Length(10)
  @IsString()
  meaning: string;
  @IsNotEmpty()
  @IsMongoId()
  category: string;
  @IsMongoId()
  @IsNotEmpty()
  accent: string;
}

export class AccentQuery {
  @IsNotEmpty()
  @IsMongoId()
  @IsOptional()
  accent: string;

  @IsNotEmpty()
  @IsMongoId()
  @IsOptional()
  category: string;
}
