public class ForecastTest {
    public static void main(String[] args) {

        double presentValue = 100000; // e.g., current revenue
        double growthRate = 0.08;     // 8% annual growth
        int years = 5;

        double futureValue = ForecastCalculator.calculateFutureValue(presentValue, growthRate, years);

        System.out.printf("Present Value: %.2f%n", presentValue);
        System.out.printf("Growth Rate: %.2f%%%n", growthRate * 100);
        System.out.printf("Projected Value after %d years: %.2f%n", years, futureValue);

        // Show year-by-year projection
        System.out.println("\nYear-by-year forecast:");
        for (int y = 0; y <= years; y++) {
            double val = ForecastCalculator.calculateFutureValue(presentValue, growthRate, y);
            System.out.printf("Year %d: %.2f%n", y, val);
        }
    }
}