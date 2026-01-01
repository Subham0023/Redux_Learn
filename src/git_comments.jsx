// ! Git Commands Reference: - For first time setup of a Git repository ------------------------------------

// * git init -- Initializes a new Git repository in the current directory.
// ! git remote -v -- Lists all configured remote repositories.
// ? git remote add origin <repository_url> -- Adds a new remote repository named 'origin'.
// * git add . -- Stages all changes (new, modified, deleted files) for the next commit.
// ? git commit -m "Your commit message" -- Commits the staged changes with a descriptive message.
// ! git branch -- Lists all branches in the repository. The current branch is indicated with an asterisk (*).
// ? git branch -m main -- Renames the current branch to 'main'.
// * git push -u origin main -- Pushes the 'main' branch to the remote repository and sets it to track the remote branch.

// ! Git Commands Reference: - For subsequent updates to the Git repository ------------------------------------

// ! git init
// ? git remote -v
// * git add .
// ? git commit -m "Your commit message"
// * git branch
// ! git push

// ! Git Commands Reference: - Additional Useful Git Commands ------------------------------------

// * git clone <repository_url> -- Clones a remote repository to your local machine.

// ? git push origin main --force -- Forces a push to the 'main' branch, overwriting remote changes (use with caution).

// * Git Status -- Shows the status of changes as untracked, modified, or staged.

// ? git remote set origin <new_repository_url> -- Changes the URL of the remote repository named 'origin'.

// * git remote remove origin -- Removes the remote repository named 'origin'.

// ? ------- When you have added the files and you need to update the same files again---------------------

// * git status -- Check the status of your files to see changes.

// ? git add . -- Stage the modified files for commit.

// * git commit -m "Updated files" -- Commit the staged changes with a message.

// ? git push origin main -- Push the committed changes to the remote repository.
