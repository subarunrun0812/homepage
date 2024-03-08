---
title: (Unity) カメラに被った建物を半透明化する
date: 2023/6/27
description: Confirm markdown display
tag: Unity, C#
author: You
---

## はじめに
プレイヤーとカメラの間に存在する建物を半透明にする方法について解説をします。


<img width="300" alt="Game Idea-34.jpg" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1349017/207ea374-1353-a1b6-2ff5-679db79a20dc.png">

<img width="390" alt="image.png](" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1349017/719fb6db-6743-a8f1-7dba-c73b210c87f6.png">

## 処理内容
カメラとプレイヤーの間にRayを飛ばし、特定のGameObject.tagを持つオブジェクトと衝突した場合、そのオブジェクトをリストに格納して半透明にします。次のフレームでは、前フレーム時に格納したリストを別のリストにコピーし、その後で現在のフレームとの差分を取り、今回衝突していないオブジェクトを不透明に戻します。

↓具体的な実装手順について↓

### step1-1: カメラとプレイヤーの間にRayを飛ばす

```c#
[SerializeField] private Transform player;
void Update()
{
    //二つのオブジェクト間のベクトルを得ます
    Vector3 _difference = (player.transform.position - this.transform.position);
    //.normalizedベクトルの正規化を行う
    Vector3 _direction = _difference.normalized;
    // Ray(開始地点,進む方向)
    Ray _ray = new Ray(this.transform.position, _direction);
}
```

### step1-2: Rayが衝突した全てのゲームオブジェクトの情報を取得する
```c#
void Updata()
{
    // Rayが衝突した全てのコライダーの情報を得る
    RaycastHit[] rayCastHits = Physics.RaycastAll(_ray);
}
```

### step1-3 取得したゲームオブジェクトを全て半透明にする
```c#
    // 前フレームで遮蔽物として扱われていたゲームオブジェクトが格納されます。
    public GameObject[] prevRaycast;
    public List<GameObject> raycastHitsList_ = new List<GameObject>();

    void Update()
    {
        Vector3 _difference = (player.transform.position - this.transform.position);
        Vector3 _direction = _difference.normalized;
        Ray _ray = new Ray(this.transform.position, _direction);
        // 今回のフレームでRayが衝突した全てのコライダーの情報を得る
        RaycastHit[] rayCastHits = Physics.RaycastAll(_ray);
        // 前フレームで遮蔽物であった全てのGameObjectを保持
        prevRaycast = raycastHitsList_.ToArray();
        raycastHitsList_.Clear();

        foreach (RaycastHit hit in rayCastHits)
        {
            SampleMaterial sampleMaterial = hit.collider.GetComponent<SampleMaterial>();
            if (hit.collider.tag == "<半透明にしたいゲームオブジェクトタグ>")
            {
                //ClearMaterialInvoke()はstep2で解説
                sampleMaterial.ClearMaterialInvoke();
                //次のフレームで使いたいため、不透明にしたオブジェクトを追加する
                raycastHitsList_.Add(hit.collider.gameObject);
            }
        }
```

### step1-4 ヒットしたGameObjectの差分を求めて、今回衝突しなかったオブジェクトを不透明に戻す
```c#
        foreach (GameObject _gameObject in prevRaycast.Except<GameObject>(raycastHitsList_))
        {
            SampleMaterial noSampleMaterial = _gameObject.GetComponent<SampleMaterial>();
            // 遮蔽物でなくなったGameObjectを不透明に戻す
            if (_gameObject != null)
            {
                noSampleMaterial.NotClearMaterialInvoke();
            }
        }
```
このforeach文はExceptメソッドを使って、prevRaycastからraycastHitsList_の要素を除外した結果を走査します。

### step1のソースコード全体
```c#
public class RayCamera : MonoBehaviour
{
    [SerializeField] private Transform player;
    [SerializeField] private GameManager gameManager;

    [SerializeField] private EatObjectScript eatObject;

    public GameObject[] prevRaycast;
    public List<GameObject> raycastHitsList_ = new List<GameObject>();

    void Update()
    {
        Vector3 _difference = (player.transform.position - this.transform.position);
        Vector3 _direction = _difference.normalized;
        Ray _ray = new Ray(this.transform.position, _direction);
        RaycastHit[] rayCastHits = Physics.RaycastAll(_ray);

        prevRaycast = raycastHitsList_.ToArray();
        raycastHitsList_.Clear();

        foreach (RaycastHit hit in rayCastHits)
        {
            SampleMaterial sampleMaterial = hit.collider.GetComponent<SampleMaterial>();

            if (
            hit.collider.tag == "10p" && gameManager.point < eatObject.obj10p || hit.collider.tag == "12p" && gameManager.point < eatObject.obj12p ||
            hit.collider.tag == "15p" && gameManager.point < eatObject.obj15p || hit.collider.tag == "20p" && gameManager.point < eatObject.obj20p ||
            hit.collider.tag == "30p" || hit.collider.tag == "50p")
            {
                sampleMaterial.ClearMaterialInvoke();
                raycastHitsList_.Add(hit.collider.gameObject);//hitしたgameobjectを追加する
            }
        }
        foreach (GameObject _gameObject in prevRaycast.Except<GameObject>(raycastHitsList_))
        {
            SampleMaterial noSampleMaterial = _gameObject.GetComponent<SampleMaterial>();
            if (_gameObject != null)
            {
                noSampleMaterial.NotClearMaterialInvoke();
            }

        }
    }
}
```

### step2 オブジェクトを透明化する
**オブジェクトの透明化については、以下の記事で詳しく解説しています。**

https://qiita.com/susasaki/items/90ef8e205f4da5a681a5


## GitHub

https://github.com/subarunrun0812/CityEater
