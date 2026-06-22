public class Logger {

    // Step 1: private static instance of itself
    private static Logger instance;

    // Step 2: private constructor prevents external instantiation
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Step 3: public static method to get the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // A simple logging method
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}