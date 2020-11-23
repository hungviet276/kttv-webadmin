# format

The format object can be used with numerical or date fields to provide more detail about how values should be formatted for display.

**Referenced by:** [fieldInfo](fieldInfo.md)

### Properties

| Property | Details
| --- | ---
| dateFormat | A string used with date fields to specify how the date should be formatted.<br>If property is present, must be one of the following values: `dayShortMonthYear`, `dayShortMonthYearLongTime`, `dayShortMonthYearLongTime24`, `dayShortMonthYearShortTime`, `dayShortMonthYearShortTime24`, `longDate`, `longDateLongTime`, `longDateLongTime24`, `longDateShortTime`, `longDateShortTime24`, `longMonthDayYear`, `longMonthDayYearLongTime`, `longMonthDayYearLongTime24`, `longMonthDayYearShortTime`, `longMonthDayYearShortTime24`, `longMonthYear`, `shortDate`, `shortDateLE`, `shortDateLELongTime`, `shortDateLELongTime24`, `shortDateLEShortTime`, `shortDateLEShortTime24`, `shortDateLongTime`, `shortDateLongTime24`, `shortDateShortTime`, `shortDateShortTime24`, `shortMonthYear`, `year`
| digitSeparator | A Boolean used with numerical fields. A value of true allows the number to have a digit (or thousands) separator. Depending on the locale, this separator is a decimal point or a comma. A value of false means that no separator will be used.
| places | An integer used with numerical fields to specify the number of decimal places. Any places beyond this value are rounded.



