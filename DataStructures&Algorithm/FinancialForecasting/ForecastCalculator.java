public class ForecastCalculator {

    /**
     * Recursively calculates future value using compound growth.
     * futureValue = presentValue * (1 + growthRate)^years
     *
     * @param presentValue current value (e.g., revenue today)
     * @param growthRate   growth rate per period, e.g., 0.08 for 8%
     * @param years        number of periods (years) to project forward
     * @return projected future value
     */
    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        // Base case: 0 years means no growth applied yet
        if (years == 0) {
            return presentValue;
        }
        // Recursive case: grow value by one period, then recurse for remaining years
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    // Optimized version using memoization-friendly iterative-style tail recursion
    // (still recursive, but demonstrates avoiding redundant recomputation
    // when called repeatedly for overlapping sub-problems)
    public static double calculateFutureValueMemoized(double presentValue, double growthRate, int years, double[] cache) {
        if (years == 0) {
            return presentValue;
        }
        if (cache[years] != 0) {
            return cache[years]; // reuse previously computed result
        }
        double result = calculateFutureValueMemoized(presentValue * (1 + growthRate), growthRate, years - 1, cache);
        cache[years] = result;
        return result;
    }
}