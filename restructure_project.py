import os
import shutil

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)

def move_file(src, dest):
    os.rename(src, dest)

def restructure_project():
    # Define the base directory
    base_dir = "."  # Assuming the script is run from the project root

    # Create new directories
    new_dirs = [
        "app/about",
        "app/contact",
        "app/marketplace",
        "app/marketplace/[id]",
        "app/cookies",
        "app/privacy",
        "app/terms",
        "app/components/ui"
    ]
    for dir_path in new_dirs:
        create_directory(os.path.join(base_dir, dir_path))

    # Define file movements
    file_movements = [
        ("app/page.tsx", "app/page.tsx"),  # Assuming this file already exists in the correct location
        ("app/layout.tsx", "app/layout.tsx"),  # Assuming this file already exists in the correct location
        ("components/app-about-page.tsx", "app/about/page.tsx"),
        ("components/app-contact-page.tsx", "app/contact/page.tsx"),
        ("components/app-marketplace-page.tsx", "app/marketplace/page.tsx"),
        ("components/app-marketplace-id-page.tsx", "app/marketplace/[id]/page.tsx"),
        ("components/app-cookies-page.tsx", "app/cookies/page.tsx"),
        ("components/app-privacy-page.tsx", "app/privacy/page.tsx"),
        ("components/app-terms-page.tsx", "app/terms/page.tsx"),
        ("components/ui/button.tsx", "app/components/ui/button.tsx"),
        ("components/ui/card.tsx", "app/components/ui/card.tsx"),
        ("components/ui/input.tsx", "app/components/ui/input.tsx"),
        ("components/ui/textarea.tsx", "app/components/ui/textarea.tsx"),
    ]

    # Move files
    for src, dest in file_movements:
        src_path = os.path.join(base_dir, src)
        dest_path = os.path.join(base_dir, dest)
        if os.path.exists(src_path):
            move_file(src_path, dest_path)
            print(f"Moved {src} to {dest}")
        else:
            print(f"Warning: {src} does not exist")

    # Remove old directories if they're empty
    old_dirs = ["components", "components/ui"]
    for dir_path in old_dirs:
        full_path = os.path.join(base_dir, dir_path)
        if os.path.exists(full_path) and not os.listdir(full_path):
            os.rmdir(full_path)
            print(f"Removed empty directory: {dir_path}")

    print("Project restructuring complete!")

if __name__ == "__main__":
    restructure_project()