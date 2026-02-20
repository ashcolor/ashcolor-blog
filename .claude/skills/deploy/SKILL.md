---
name: deploy
description: Create a PR from develop to main and merge it
disable-model-invocation: true
allowed-tools: Bash(git *), Bash(gh *)
---

# deploy

developブランチからmainブランチへのPR作成とマージを行う。

## 手順

1. git statusで現在の状態を確認
2. developブランチにいることを確認
3. `git log main..develop --oneline`でmainに含まれていないコミットを確認
4. PRタイトルと本文を作成
   - タイトルは変更内容を簡潔に（70文字以内）
   - 本文はSummaryのみ（個人プロジェクトのためTest planは不要）
5. `gh pr create --base main --head develop`でPR作成
6. `gh pr merge --merge`でそのままマージ

## 注意

- ghコマンドが認証されていない場合は`gh auth login`を先に実行
- mainブランチへの直接pushは避け、必ずPR経由でマージする
