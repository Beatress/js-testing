const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const ans = isPangram(text);
    // Assert
    expect(ans).toEqual(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act
    const ans = isPangram(text);
    // Assert
    expect(ans).toEqual(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwyz';
    // Act
    const ans = isPangram(text);
    // Assert
    expect(ans).toEqual(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = '';
    // Act
    const ans = isPangram(text);
    // Assert
    expect(ans).toEqual(false);
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';
    // Act
    const ans = isPangram(text);
    // Assert
    expect(ans).toEqual(true);
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz1124893';
    // Act
    const ans = isPangram(text);
    // Assert
    expect(ans).toEqual(true);
  });

  // Write your own test case
  test('long sentence with no Bs fails', () => {
    // Arrange
    const text = 'Qui est eum recusandae corporis incidunt qui voluptatem. Consequatur occaecati vero laorum quis deserunt facere nesciunt. Aperiam a non tempora delectus. Similique consequatur et culpa alias. Rerum voluptas liero sit eos. Omnis reprehenderit id voluptatem rerum minima. Voluptatem velit molestiae ea similique. Minus in explicao velit possimus et fugiat eligendi. Est rerum reiciendis vel dolores vero quae. Omnis porro laudantium assumenda. Corporis sint ut temporius eum quisquam delectus. Sint tempore voluptas aperiam ut. Nisi at et itaque vitae eveniet sunt ex nois. Nihil dolorem non non et. Magnam veniam natus voluptatius itaque voluptates eaque iure. Vel consectetur quiusdam expedita eos ea repellat. Laore quam totam qui. Et nam nois sit impedit cupiditate possimus.';
    // Act
    const ans = isPangram(text);
    // Assert
    expect(ans).toEqual(false);
  });
});
