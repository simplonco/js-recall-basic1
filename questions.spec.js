'use strict';

describe('javascript-Basecall', function() {
  
  // la fonction doit retourner un nombre
  it('return a number', function() {
    var result = getNumber();
    expect(result).toEqual(jasmine.any(Number));
  });
  
  // la fonction doit retourner une chaine de caractère
  it('return a string', function() {
    var result = getString();
    expect(result).toEqual(jasmine.any(String));
  });

  // la fonction doit retourner un booléen
  it('return a boolean', function() {
    var result = getBoolean();
    expect(result).toEqual(jasmine.any(Boolean));
  });

  // la fonction doit retourner un tableau
  it('return an array', function() {
    var result = getArray();
    expect(result).toEqual(jasmine.any(Array));
  });

  // la fonction doit retourner BONJOUR sous forme de string
  it('return boujour and it should be uppercase', function() {
    var result = getBonjourUppercase();
    expect(result).toEqual('BONJOUR');
  });

  // la fonction doit retourner 123 sous forme de string
  it('return 123 and it should be a string', function() {
    var result = get123String();
    expect(result).toEqual('123');
  });

  // la fonction doit retourner un tableau avec les 3 elements suivants : foo, bar et buzz
  // les elements doivent être retournés dans l'ordre où ils sont cités
  it('return an array with 3 strings : foo, bar and buzz', function() {
    var result = getArrayWithRequiredItems();
    expect(result).toEqual(['foo', 'bar', 'buzz']);
  });

  // la fonction doit retourner un tableau avec 5 nombres
  it('return an array with 5 numbers', function() {
    var result = getArrayWith5Numbers();
    result.map( function(item) {
      expect(item).toEqual(jasmine.any(Number));
    });
    expect(result.length).toEqual(5);
  });

  // la fonction doit retourner un objet avec une clé A and une clé B
  it('return an object with a key A and a key B', function() {
    var result = getObjectWithRequiredKeys();
    expect(result.A).not.toBeUndefined();
    expect(result.B).not.toBeUndefined();
  });

  // la fonction doit retourner un objet avec une clé A and a key B qui retournent respectivement 'foo' et 'bar'
  it('return an object with a key A with \'foo\' as value and a key B with \'bar\' as value', function() {
    var result = getObjectWithRequiredKeys();
    expect(result.A).toEqual('foo');
    expect(result.B).toEqual('bar');
  });

  // la fonction doit retourner un objet avec une clé A avec comme valeur un tableau de 5 nombres
  it('return an object with required key A that value is an array with 5 numbers', function() {
    var result = getObjectWithArrayWith5Numbers();
    expect(result.A).toEqual(jasmine.any(Array));

    result.A.map( function(item) {
      expect(item).toEqual(jasmine.any(Number));
    });
    expect(result.A.length).toEqual(5);
  });

  // la fonction doit retourner un tableau comprenant 3 objets.
  // chaque objet doit avoir une clé firstName et une clé lastName
  it('return an array with 3 objects. Each object have to have a key lastName and a key firstName', function() {
    var result = getArrayWith3ObjectsWithSpecificFormat();
    result.map( function(item) {
      expect(item.firstName).not.toBeUndefined();
      expect(item.lastName).not.toBeUndefined();
    });
  });

});
