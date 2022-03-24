class MoreMath {
  getInfo() {
    return {
      id: "MoreMath",
      color1: '#2dc4c4',
      color2: '#2dc4b3',
      color3: '#29a395',
      blocks: [
        {
          opcode: 'power',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] ^ [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3'
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'greaterthanorequalto',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[LEFT] ≥ [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '50'
            }
          }
        },
        {
          opcode: 'lessthanorequalto',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[LEFT] ≤ [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '50'
            }
          }
        },
        {
          opcode: 'numtobool',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[NUM]',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'distance',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Distance X:[X1] Y:[Y1] and X:[X2] Y:[Y2]',
          arguments: {
            X1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
						Y1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
						X2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            Y2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        }
      ]
    };
  }

  power({ LEFT, RIGHT }) {
    return Math.pow(LEFT,RIGHT);
  }

  greaterthanorequalto({ LEFT, RIGHT }) {
    return LEFT >= RIGHT;
  }

  lessthanorequalto({ LEFT, RIGHT }) {
    return LEFT <= RIGHT;
  }

  numtobool({ NUM }) {
		if(NUM != 0){
			return 1;
		}
		else
		{
			return 0;
		}
  }

  distance({ X1, Y1, X2, Y2 }) {
    return Math.sqrt(((X2-X1)*(X2-X1))+((Y2-Y1)*(Y2-Y1)));
  }
}

Scratch.extensions.register(new MoreMath());
