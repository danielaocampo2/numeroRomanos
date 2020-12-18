import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';



////
describe('RomanNumeralsService', () => {

  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });
});

describe('Base Cases', () =>{
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('"I" should be 1', () => {
    expect(service.romano(1)).toEqual('I');
  });

  it('"V" should be 5', () => {
    expect(service.romano(5)).toEqual('V');
  });

  it('"X" should be 10', () => {
    expect(service.romano(10)).toEqual('X');
  });

  it('"L" should be 50', () => {
    expect(service.romano(50)).toEqual('L');
  });

  it('"C" should be 100', () => {
    expect(service.romano(100)).toEqual('C');
  });

  it('"D" should be 500', () => {
    expect(service.romano(500)).toEqual('D');
  });

  it('"M" should be 1000', () => {
    expect(service.romano(1000)).toEqual('M');
  });
});

describe('common cases', () => {

  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('"II" should be 2', () => {
    expect(service.romano(2)).toEqual('II');
  });

  it('"III" should be 3', () => {
    expect(service.romano(3)).toEqual('III');
  });

  it('"IV" should be 4', () => {
    expect(service.romano(4)).toEqual('IV');
  });

  it('"VI" should be 6', () => {
    expect(service.romano(6)).toEqual('VI');
  });

  it('"VIII" should be 8', () => {
    expect(service.romano(8)).toEqual('VIII');
  });

  it('"IX" should be 9', () => {
    expect(service.romano(9)).toEqual('IX');
  });

  it('"XIV" should be 14', () => {
    expect(service.romano(14)).toEqual('XIV');
  });

  it('"XV" should be 15', () => {
    expect(service.romano(15)).toEqual('XV');
  });

  it('"XX" should be 20', () => {
    expect(service.romano(20)).toEqual('XX');
  });

  it('"LXX" should be 70', () => {
    expect(service.romano(70)).toEqual('LXX');
  });

  it('"CL" should be 150', () => {
    expect(service.romano(150)).toEqual('CL');
  });

  it('"CCC" should be 300', () => {
    expect(service.romano(300)).toEqual('CCC');
  });

  it('"DCCC" should be 800', () => {
    expect(service.romano(800)).toEqual('DCCC');
  });
});

describe('Special cases', () => {

  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('"XLIV" should be 44', () => {
    expect(service.romano(44)).toEqual('XLIV');
  });

  it('"XLIX" should be 49', () => {
    expect(service.romano(49)).toEqual('XLIX');
  });

  it('"XCIX" should be 99', () => {
    expect(service.romano(99)).toEqual('XCIX');
  });

  it('"CDXLIX" should be 449', () => {
    expect(service.romano(449)).toEqual('CDXLIX');
  });

  it('"CMXCIX" should be 999', () => {
    expect(service.romano(999)).toEqual('CMXCIX');
  });
});

describe('Random cases', () => {

  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('"DCCCI" should be 801', () => {
    expect(service.romano(801)).toEqual('DCCCI');
  });

  it('"CMLIX" should be 959', () => {
    expect(service.romano(959)).toEqual('CMLIX');
  });

  it('"DXCIV" should be 594', () => {
    expect(service.romano(594)).toEqual('DXCIV');
  });

  it('"LXI" should be 61', () => {
    expect(service.romano(61)).toEqual('LXI');
  });

  it('"CCCLXXXVI" should be 386', () => {
    expect(service.romano(386)).toEqual('CCCLXXXVI');
  });

  it('"XXXIX" should be 39', () => {
    expect(service.romano(39)).toEqual('XXXIX');
  });

  it('"DCCIX" should be 709', () => {
    expect(service.romano(709)).toEqual('DCCIX');
  });

  it('"CCLXXIX" should be 279', () => {
    expect(service.romano(279)).toEqual('CCLXXIX');
  });
});
