import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {
    public static void main(String[] args) {

        // Unsorted array for linear search
        Product[] products = {
            new Product(105, "Wireless Mouse", "Electronics"),
            new Product(102, "Bluetooth Speaker", "Electronics"),
            new Product(110, "Yoga Mat", "Fitness"),
            new Product(101, "Running Shoes", "Fitness"),
            new Product(108, "Office Chair", "Furniture")
        };

        System.out.println("--- Linear Search ---");
        long start = System.nanoTime();
        Product result1 = SearchAlgorithms.linearSearch(products, 108);
        long end = System.nanoTime();
        System.out.println("Found: " + result1);
        System.out.println("Time taken: " + (end - start) + " ns");

        // Sorted copy for binary search
        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts, Comparator.comparingInt(Product::getProductId));

        System.out.println("\n--- Binary Search ---");
        start = System.nanoTime();
        Product result2 = SearchAlgorithms.binarySearch(sortedProducts, 108);
        end = System.nanoTime();
        System.out.println("Found: " + result2);
        System.out.println("Time taken: " + (end - start) + " ns");

        System.out.println("\n--- Search for non-existent product ---");
        System.out.println("Linear result: " + SearchAlgorithms.linearSearch(products, 999));
        System.out.println("Binary result: " + SearchAlgorithms.binarySearch(sortedProducts, 999));
    }
}