#!/usr/bin/env bash

FROM=$1;
TO=$2

# Pre-receive hook that will block commits with messges that do not follow regex rule

commit_msg_type_regex="build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test"
commit_msg_scope_regex=".{1,20}"
commit_msg_subject_regex=".{1,100}"
commit_msg_regex="^(${commit_msg_type_regex})(\(${commit_msg_scope_regex}\))?: (${commit_msg_subject_regex})\$"
merge_msg_regex="^Merge pull request .+"
merge_msg_branch_regex="^Merge branch.+"
merge_remote_msg_branch_regex="^Merge remote-tracking branch.+"
revert_msg_regex="^Revert \".+\"\$"
merge_msg_into_regex="^Merge+\s(\b[0-9a-f]{5,40}\b)+\s+into+\s+(\b[0-9a-f]{5,40}\b)$"

error=""
rev_span=`git rev-list $FROM..$TO`

for commit in $rev_span; do
  commit_msg_header=$(git show -s --format=%s $commit)
  if ! [[ $commit_msg_header =~ (${commit_msg_regex})|(${merge_msg_regex})|(${revert_msg_regex})|(${merge_msg_into_regex})|(${merge_msg_branch_regex})|(${merge_remote_msg_branch_regex}) ]]; then
    echo "ERROR: Invalid commit message format" >&2
    echo "$commit $commit_msg_header " >&2
    echo "Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint" >&2
    error="true"
  fi
done

if [ -n "$error" ]; then
  exit 1
fi
