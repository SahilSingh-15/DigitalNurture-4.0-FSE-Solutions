class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow");
    }

    public static void main(String[] args) {
        Animal myAnimal = new Cat();
        myAnimal.makeSound();
    }
}
