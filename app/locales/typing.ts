// app/locales/typing.ts

export type LocaleType = {
  WIP: string;
  Error: {
    Unauthorized: string;
    // Add more error types as needed
  };
  // Add more locale types as needed
};

// Unit tests
describe('LocaleType', () => {
  it('should have the correct properties', () => {
    const locale: LocaleType = {
      WIP: "Coming Soon",
      Error: {
        Unauthorized: "Invalid API Key, please check it in [Settings](/#/settings) page.",
      },
    };

    expect(locale.WIP).toBe("Coming Soon");
    expect(locale.Error.Unauthorized).toBe("Invalid API Key, please check it in [Settings](/#/settings) page.");
  });
});
